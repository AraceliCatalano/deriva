import React from 'react';
import BonusTrack from './BonusTrack';
import '../../assets/styles/App.css';
import { Tab, Tabs, Accordion } from 'react-bootstrap';


function BonusTrackContainer () {
    return (
       <> 
        <div className="bonusTrackContainer">
        <h2> Bonus Tracks</h2>
        <p className="bt-description">A continuación te compartimos una lista de contenido adicional a algunos paseos. Pueden estar relacionados al tema del paseo pero alejados de la zona del recorrido.</p>
        <Tabs
            defaultActiveKey="todos"
            id="tours-catalog-display"
            className="mb-3 categories-container category-name" 
            >
                <Tab eventKey="todos" title="Todos" >
                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="bt-title">Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    
                </Tab>
                <Tab eventKey="historia" title="Historia">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="bt-title">Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Tab>
                <Tab eventKey="arte" title="Arte">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="bt-title">Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Tab>
                <Tab eventKey="arquitectura" title="Arquitectura">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="bt-title">Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Tab>
                <Tab eventKey="bondi" title="Historias en bondi">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="bt-title">Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Título del paseo relacionado</Accordion.Header>
                        <Accordion.Body>
                            <BonusTrack />
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Tab>
            </Tabs>
        </div>
        
       </>
    )
}

export default BonusTrackContainer;