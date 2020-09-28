export const imageTypes = ["jpg", "jpeg", "png", "gif"];
const pdfTypes = ["pdf"];
const videoTypes = ["mov", "mp4", "flv"];
export const artefactTypes = [...imageTypes, ...pdfTypes, ...videoTypes];

export function getFileType(fileName) {
  const fileExt = fileName.split(".").pop();
  if (imageTypes.includes(fileExt)) return "image";
  if (pdfTypes.includes(fileExt)) return "pdf";
  if (videoTypes.includes(fileExt)) return "video";
}
