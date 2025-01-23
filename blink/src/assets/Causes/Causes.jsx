import React from 'react'
import "./Causes.css"
const Causes = () => {
    return (
        <>
            <h1 className='headcause'>Our Causes</h1>
            <section className="cause">
                <div className="center">

                    {/* cause1   */}
                    <div className="mains">
                    <div className="causes">
                        <img src="public/childeducation.jpg" alt="" className="childedu" />
                        <div className="all">
                            <div className="causes2">
                                <h5 className="educat">Children Education</h5>
                                <p className="grap">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</p>
                            </div>
                            <div className="linesss">
                                <div className="linessss"></div>
                            </div>
                            <div className="rates">
                                <p className="raised">
                                    <strong>Raised:</strong>
                                    $18,500
                                </p>
                                <p className="goal">
                                    <strong>
                                        Goal:
                                    </strong>
                                    $32,000
                                </p>
                            </div>
                        </div>
                        <div className="donat">
                            <a href="" className="button">Donate Now</a>
                        </div>
                    </div>
                    </div>


                    {/* cause2 */}
                    <div className="mains">

                    <div className="causes">
                        <img src="public/poor-child.jpg" alt="" className="childedu" />
                        <div className="all">
                            <div className="causes2">

                                <h5 className="educat">Poverty Development</h5>
                                <p className="grap">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</p>
                            </div>
                            <div className="linesss2">
                                <div className="linessss2"></div>
                            </div>
                            <div className="rates">
                                <p className="raised">
                                    <strong>Raised:</strong>
                                    $27,600
                                </p>
                                <p className="goal">
                                    <strong>
                                        Goal:
                                    </strong>
                                    $60,000
                                </p>
                            </div>
                        </div>
                        <div className="donat">
                            <a href="" className="button">Donate Now</a>
                        </div>
                    </div>
                    </div>



                    {/* Causes3 */}


                    <div className="mains">
                    <div className="causes">
                        <img src="public/drinkingwater.jpg" alt="" className="childedu" />
                        <div className="all">
                            <div className="causes2">
                                <h5 className="educat">Supply drinking water</h5>
                                <p className="grap">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</p>
                            </div>
                            <div className="linesss3">
                                <div className="linessss3"></div>
                            </div>
                            <div className="rates">
                                <p className="raised">
                                    <strong>Raised:</strong>
                                    $84,600
                                </p>
                                <p className="goal">
                                    <strong>
                                        Goal:
                                    </strong>
                                    $100,000
                                </p>
                            </div>
                        </div>
                        <div className="donat">
                            <a href="" className="button">Donate Now</a>
                        </div>
                    </div>
                </div>
                </div>

            </section>
        </>
    )
}

export default Causes