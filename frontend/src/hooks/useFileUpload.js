import {
    useState
} from "react";

export const useFileUpload = (initialSrc) => {
    const [src, setSrc] = useState(initialSrc);
    const [file, setFile] = useState();

    const uploadFile = (e) => {
        const {
            files
        } = e.target;
        if (files && files[0]) {
            const fileReader = new FileReader();

            fileReader.onload = () => {
                setSrc(fileReader.result);
                setFile(files[0]);
            };

            fileReader.readAsDataURL(files[0]);
        } else {
            setSrc(initialSrc);
            setFile();
        }
    }

    return [uploadFile, src, file];
}