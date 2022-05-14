import React from 'react';

import { Container } from './styles';

const Available: React.FC = () => {
  return (
    <Container>
    <div className="available">
        <div className="text">
                        <h1>
                Available activities
            </h1>
            <p>See the wide range of opportunities with which you can participate on our testnet</p> 
        </div>

            <div className="container">
                <div className="acoes">
                    <p>Refer a friend</p>
                </div>
                <div className="acoes">
                    <p>Refer a friend</p>
                </div>
                <div className="acoes">
                    <p>Refer a friend</p>
                </div>
                <div className="acoes">
                    <p>Refer a friend</p>
                </div>
            </div>

    </div>    
    </Container>
);
}

export default Available;