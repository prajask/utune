'use client';

import { useState } from 'react';

import{
    Link,
    Modal,
    FormItem,
    FileUploaderDropContainer
} from '@carbon/react';

import{
    AddAlt,
    ArrowRight
} from '@carbon/icons-react';

const ProjectAddDataset = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
        <button
            onClick={() => setOpen(true)}
            className="project-add-dataset"
        >
            Add Dataset

            <AddAlt />
        </button>

        <Modal 
            open={open}
            onRequestClose={() => setOpen(false)} 
            modalHeading="Add Dataset"
            primaryButtonText="Upload Dataset" 
            secondaryButtonText="Cancel"
        >
            <Link
                href="/datasets"
                renderIcon={ArrowRight}
                size="lg"
                className="dataset-modal--link"
            >
                Browse for community Datasets
            </Link>
            
            <hr />
            
            <FormItem
                className='dataset-modal--upload-dataset'
            >
                <p className="cds--file--label">
                    Upload your own dataset
                </p>
                <p className="cds--label-description">
                    Max file size is 5 GB. Supported file types are .xlsx, .json, .csv.
                </p>
                <FileUploaderDropContainer
                    accept={[
                    ]}
                    innerRef={{
                        current: '[Circular]'
                    }}
                    labelText="Drag and drop files here or click to upload"
                    multiple
                    name=""
                    onAddFiles={() => {}}
                    onChange={() => {}}
                    tabIndex={0}
                />
                <div className="cds--file-container cds--file-container--drop" />
            </FormItem>
        </Modal>
    </>
  )
}

export default ProjectAddDataset