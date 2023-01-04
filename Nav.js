import React from "react";
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import "@cels/react-treeview/dist/styles.css";
// import Simple_Tree,{Summary_Tree} from './Tree';
import Ta_sample from './TABLE/Ta_sample';
import Ta_study from './TABLE/Ta_study';
import Ta_image from './TABLE/Ta_image';

function Navbar(){
    return (
        <div className="Menu">

            {/* 1 */}
            <input type="radio" id="tabHome" name="Menu" checked="checked"></input>
            <label for="tabHome">Home</label>
            <div className="tab">
                <center><b className="Big">Welcome to my WEBSITE</b>
                <br></br>
                <p>100GB website</p></center>
            </div>

            {/* 2 */}
            <input type="radio" id="tab100GB" name="Menu"></input>
            <label for="tab100GB">Data</label>
            <div className="tab">
                <b className="Big">Dataset information</b>
                <p>The train dataset comprises 6,334 chest scans in DICOM format, 
                    which were de-identified to protect patient privacy. All images were 
                    labeled by a panel of experienced radiologists for the presence of 
                    opacities as well as overall appearance.</p>
                <p>Note that all images are stored in paths with the form study/series/image. 
                    The study ID here relates directly to the study-level predictions, and 
                    the image ID is the ID used for image-level predictions.</p>
                <p>The hidden test dataset is of roughly the same scale as the training dataset.</p>

                <b className="Big">Files</b>
                <li>train_study_level.csv  -  the train study-level metadata, with one row for each study, including correct labels.</li>
                <li>train_image_level.csv - the train image-level metadata, with one row for each image, including both correct labels and any bounding boxes in a dictionary format. Some images in both test and train have multiple bounding boxes.</li>
                <li>sample_submission.csv - a sample submission file containing all image- and study-level IDs.</li>

                <b className="Big">Columns</b>
                <p><h3>train_study_level.csv</h3></p>
                    <li>id - unique study identifier</li>
                    <li>Negative for Pneumonia - 1 if the study is negative for pneumonia, 0 otherwise</li>
                    <li>Typical Appearance - 1 if the study has this appearance, 0 otherwise</li>
                    <li>Indeterminate Appearance  - 1 if the study has this appearance, 0 otherwise</li>
                    <li>Atypical Appearance  - 1 if the study has this appearance, 0 otherwise</li>                
                <p><h3>train_image_level.csv</h3></p>
                    <li>id - unique image identifier</li>
                    <li>boxes - bounding boxes in easily-readable dictionary format</li>
                    <li>label - the correct prediction label for the provided bounding boxes</li>
                <br></br><br></br>
            </div>

            {/* 3 */}
            <input type="radio" id="tabtree" name="Menu"></input>
            <label for="tabtree">Tree</label>
            <div className="tab">
            <div className="show">
                <section>
                    <article>
                        <div >
                        <font size="5">Data Explorer</font>
                        <br></br>
                        128.51GB
                        <br></br><br></br>
                        </div>
                    </article>
                    <article>
                        <div  className='dcm__tree' >
                            {/* <Simple_Tree/> */}
                        </div>
                        <div  className='summary_tree' >
                        <hr></hr>
                        </div>
                        <h2>Summary</h2>
                    </article>
                    <article>
                        <div  className='summary_tree' >
                        {/* <Summary_Tree/> */}
                        <hr></hr>
                        <br></br>
                        </div>
                        <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large' style={{ background: "black",borderColor: "black" }}>
                        Download All
                        </Button>
                    </article>
                </section>
                </div>
            </div>

            {/* 4 */}
            <input type="radio" id="tabtable" name="Menu"></input>
            <label for="tabtable">Table&Graph</label>
            <div className="tab">
                <section className="grid">
                        <div className="csv__show">
                            <h1>sample submission</h1>
                            <Ta_sample/>
                            <h1>train image level</h1>
                            <Ta_image/>
                            <h1>train study level</h1>
                            <Ta_study/>
                        </div>
                </section>
            </div>
        </div>
    );
}
export default Navbar;