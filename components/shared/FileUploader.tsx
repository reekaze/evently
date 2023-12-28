import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    imageUrl: string,
    onFieldChange: (value: string) => void,
    setFiles: Dispatch<SetStateAction<File[]>>
}

const FileUploader = ({ imageUrl, onFieldChange, setFiles }: Props) => {
    return (
        <div>FileUploader</div>
    )
}

export default FileUploader