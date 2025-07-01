import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para convertir una imagen a WebP
async function convertToWebP(inputPath, outputPath, quality = 80) {
  try {
    await sharp(inputPath).webp({ quality }).toFile(outputPath);

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const reduction = (
      ((inputStats.size - outputStats.size) / inputStats.size) *
      100
    ).toFixed(1);

    console.log(`✅ Convertido: ${path.basename(inputPath)}`);
    console.log(
      `   Tamaño original: ${(inputStats.size / 1024).toFixed(1)} KB`
    );
    console.log(`   Tamaño WebP: ${(outputStats.size / 1024).toFixed(1)} KB`);
    console.log(`   Reducción: ${reduction}%\n`);

    return { success: true, reduction };
  } catch (error) {
    console.error(`❌ Error convirtiendo ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Función para procesar un directorio recursivamente
async function processDirectory(dirPath, outputDir, quality = 80) {
  const items = fs.readdirSync(dirPath);
  let totalReduction = 0;
  let successCount = 0;
  let totalCount = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Crear el directorio de salida si no existe
      const newOutputDir = path.join(outputDir, item);
      if (!fs.existsSync(newOutputDir)) {
        fs.mkdirSync(newOutputDir, { recursive: true });
      }

      const result = await processDirectory(fullPath, newOutputDir, quality);
      totalReduction += result.totalReduction;
      successCount += result.successCount;
      totalCount += result.totalCount;
    } else if (path.extname(item).toLowerCase() === ".png") {
      totalCount++;
      const outputPath = path.join(outputDir, item.replace(".png", ".webp"));

      const result = await convertToWebP(fullPath, outputPath, quality);
      if (result.success) {
        successCount++;
        totalReduction += parseFloat(result.reduction);
      }
    }
  }

  return { totalReduction, successCount, totalCount };
}

// Función principal
async function main() {
  console.log("🔄 Iniciando conversión de imágenes PNG a WebP...\n");

  const imageDirs = ["src/assets/images", "src/assets/icons"];

  let totalReduction = 0;
  let totalSuccess = 0;
  let totalImages = 0;

  for (const dir of imageDirs) {
    if (fs.existsSync(dir)) {
      console.log(`📁 Procesando directorio: ${dir}`);
      const result = await processDirectory(dir, dir, 80);
      totalReduction += result.totalReduction;
      totalSuccess += result.successCount;
      totalImages += result.totalCount;
      console.log(
        `   Completado: ${result.successCount}/${result.totalCount} imágenes\n`
      );
    }
  }

  console.log("📊 RESUMEN FINAL:");
  console.log(`   Total de imágenes procesadas: ${totalImages}`);
  console.log(`   Conversiones exitosas: ${totalSuccess}`);
  console.log(
    `   Promedio de reducción: ${(totalReduction / totalSuccess).toFixed(1)}%`
  );

  if (totalSuccess > 0) {
    console.log("\n🎉 ¡Conversión completada exitosamente!");
    console.log(
      "💡 Recuerda actualizar las referencias en tu código para usar los archivos .webp"
    );
  } else {
    console.log("\n⚠️  No se encontraron imágenes PNG para convertir");
  }
}

// Ejecutar el script
main().catch(console.error);
