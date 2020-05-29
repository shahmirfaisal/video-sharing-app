import {
    useState
} from "react";
import {useDispatch} from "react-redux";
import * as actions from "../store/actions/actions"

export const useFileUpload = (initialSrc) => {
    const [src, setSrc] = useState(initialSrc);
    const [file, setFile] = useState();
    const dispatch = useDispatch();

    const uploadFile = (e) => {
        const {
            files
        } = e.target;
        if (files && files[0]) {
            const fileReader = new FileReader();
            dispatch({type: actions.TOGGLE_BACKDROP_SPINNER, value: true});
            fileReader.onload = () => {
                setSrc(fileReader.result);
                setFile(files[0]);
                dispatch({type: actions.TOGGLE_BACKDROP_SPINNER, value: false});
            };

            fileReader.readAsDataURL(files[0]);
        } else {
            setSrc(initialSrc);
            setFile();
        }
    }

    return [uploadFile, src, file];
}