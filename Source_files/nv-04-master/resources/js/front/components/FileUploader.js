import {useState} from 'react';

function FileUploader() {
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [element, setElement] = useState();

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
        setElement(event.target);
    };
    if (isSelected) {

        const formData = new FormData();

        formData.append('File', selectedFile);
        fetch(
            window.UPLOAD_URL,
            {
                method: 'POST',
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                let jquery_el=$("input[name='"+element.name+"']");
                jquery_el.data('upload_path',result.success);
            })
            .catch((error) => {
                console.error('Error:', error);
            }).finally(() => {
                setIsSelected(false);
            }
        );

    }


    return (
        <div>
            <input type="file" name="image" onChange={changeHandler}/>
            {isSelected ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
        </div>
    )
}

export default FileUploader;
