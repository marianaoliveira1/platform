import React from 'react';
import logoImg from '../../assets/logo.svg'

import { Container } from './style';

const Header: React.FC = () => {
  return (
      <div className="body">
          <Container>
          <div className="member">
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
            <p>
                Testnet Metrics
                </p>
            <div className="container-caixas">
                <div className="total-caixas">
                    <div className="caixas">
                        <div className="primeira">
                            <h3>Participation Payout </h3>
                            <p>
                                $84612056
                            </p>
                        </div>
                    </div>
                </div>
                <div className="total-caixas">
                    <div className="caixas">
                        <div className="primeira">
                            <h3>Active Validators </h3>
                            <p>
                               25
                            </p>
                        </div>
                    </div>
                </div>
                <div className="total-caixas">
                    <div className="caixas">
                        <div className="primeira">
                            <h3>Block Heightt </h3>
                            <p>
                            528k
                            </p>
                        </div>
                    </div>
                </div>
                <div className="total-caixas">
                    <div className="caixas">
                        <div className="primeira">
                            <h3>Memberships </h3>
                            <p>
                            3887
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </Container>
      </div>
  );
}

export default Header;