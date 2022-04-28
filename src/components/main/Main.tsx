import React from 'react';
import logoImg from '../../assets/logo.svg'

import { Container } from './style';

const Main: React.FC = () => {
  return (
      <div className="main">
          <Container>
          <div className="main">
                <div className="texto">
                    <h1>The video <br /> platform DAO</h1>
                    <h2>Joystream is a video platform controlled, <br />
                        owned, and operated by its users
                    </h2>
                    <button>
                        Start
                    </button>
                </div>
                <div className="image">
                    <img src={logoImg} alt='imagem de logo' />
                </div> 
            </div>
            <div className="caixas-text">
                <p>
                Testnet Metrics
                </p>
                <div className="caixas">
                    <div className="primeira">
                        <h3>
                        Participation Payout
                        </h3>
                        <p>
                            $84612056
                        </p>
                    </div>
                </div>
            </div>
          </Container>
      </div>
  );
}

export default Main;