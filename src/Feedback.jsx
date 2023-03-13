import React from "react";

const Feedback = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto pt-5">
            <div className="row d-flex  align-items-center mb-3">
              <div className="col-md-6 col-sm-12 mb-sm-5">
                <h2 className="ratingheading">Please rate our service</h2>
                <div className="rate">
                  <input type="button" value="🤩" />
                  <input type="button" value="😊" />
                  <input type="button" value="🙂" />
                  <input type="button" value="😐" />
                  <input type="button" value="😓" />
                </div>
                <br />
                <h3>
                  We always try our best to improve your life style by such services if you
                  want to give some suggestion to me then please!:
                </h3>
                
                <textarea name="address" id="address"  placeholder="Give suggestion" style={{padding:"8px"}}></textarea>


              </div>
              <div className="col-md-6 col-sm-12" >
                <fieldset >
                  <legend><h2 className="ratingheading">Feedback:</h2></legend>
                  
                  <textarea name="address" id="address"  placeholder="Give Feedback" style={{padding:"8px"}}></textarea>
                  
                </fieldset>
                <fieldset>
                  <legend><h2 className="ratingheading">Quary:</h2></legend>
                  
                  <textarea name="address" id="address"  placeholder="Any Quary" style={{padding:"8px"}}></textarea>
                  
                </fieldset>

              </div>
            </div>
            <div className="feedbacksubmit">
            <input type="button" value="Submit" className="btn btn-outline-info"   />
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}
export default Feedback;