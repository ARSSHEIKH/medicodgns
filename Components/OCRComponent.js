
import TesseractOcr, {
  LANG_ENGLISH,
} from 'react-native-tesseract-ocr';


export default async function TextRecognizing(imageSource) {
    console.log("imageSource", imageSource)
    const tessOptions = {};
    const recognizedText = await TesseractOcr.recognize(imageSource, LANG_ENGLISH, tessOptions);
    console.log(recognizedText)
}
