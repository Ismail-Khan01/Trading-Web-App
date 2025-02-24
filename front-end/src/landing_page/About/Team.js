import React from "react";

function Team(params) {
    return (<div className="container">
        <div className="row">
            <div className="col-6 text-center mt-5">
                <img src="media/images/nithinKamath.jpg" className="w-50" style={{ borderRadius: "100%" }} />
                <div className="text-center">
                    <p className="fs-4">Nithin Kamath</p>
                    <p>Founder, CEO</p>
                </div>
            </div>
            <div className="col-5 me-3 fs-8">
                <h1 className="mb-5 fs-2">People</h1>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
            </div>
        </div>

    </div>)
}
export default Team;