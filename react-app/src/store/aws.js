const LOAD_FILES = 'files/load';
const UPLOAD_FILE = 'files/upload'
const DELETE_FILE = 'files/delete'

const loadFile = (files) => ({
    type: LOAD_FILES,
    files
});

const uploadAFile = (file) => ({
    type: UPLOAD_FILE,
    file
})

const deleteFile = (fileId) => ({
    type: DELETE_FILE,
    fileId
})

export const uploadFile = (fileForm) => async (dispatch) => {
    const {
        dog_id,
        file // this is the file for uploading
    } = fileForm;

    const form = new FormData();
    form.append('dog_id', dog_id);
    // repeat as necessary  for each required form field
    form.append('file', file);

    const res = await fetch('/api/file/', {
        method: "POST",
        body: form
    });
    const createdFile = await res.json();

    dispatch(uploadAFile(createdFile));
    return createdFile
};

export const getFiles = () => async (dispatch) => {
    const response = await fetch('/api/file/file');
    const files = await response.json();

    dispatch(loadFile(files));
    return response
}

export const removeFile = (fileId) => async (dispatch) => {
    const response = await fetch(`/api/file/${fileId}/delete`, {
        method: 'DELETE',
        statusCode: 204,
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const file = await response.json();
        dispatch(deleteFile(fileId));
    }
    return fileId
}


const initialState = {};

const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FILES:
            const newState = { ...state };
            action.files.files.forEach(file => {
                newState[file.id] = file;
            });
            return newState;
        case UPLOAD_FILE:
            const newFile = { ...state }
            newFile[action.file.id] = action.file
            return newFile
        case DELETE_FILE:
            const deleteState = { ...state }
            delete deleteState[action.fileId]
            return { ...deleteState }
        default:
            return state;
    }
};

export default fileReducer;