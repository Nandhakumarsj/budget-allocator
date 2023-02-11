import { useState } from "react";

const Offside = ({altHead,altText}) =>{
    const [toshow , setToShow] = useState(true);
    const close = () => setToShow(false);
    return(
        <>
            <div className={'offcanvas-md offcanvas-top '+toshow? ' show ':''} tabIndex='-1'>
                <div className="offcanvas-header">
                    <h3>{altHead}</h3>
                    <div>
                    <button className="btn-close text-reset" onClick={close} type='button'></button>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <p className="lead">
                        {altText}
                    </p>
                </div>
            </div>
        </>
    );
}
export default Offside;