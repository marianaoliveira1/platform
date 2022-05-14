import React from 'react';

import { Container } from './styles';

import memberImg from '../../assets/member.svg';

const Member: React.FC = () => {
  return (
    <div className="body">
        <Container>   
          <div id="main">
            <div className="image">
              <img src={memberImg} alt="imagem de membro"/>
            </div>
            <div className="text">
                <p>
                Our brand new and unparalleled community token distribution scheme
                </p>
                <h2>
                Become a Founding Member to earn <br />
                mainnet tokens and influence the <br />
                development of the platform.
                </h2>
                <a>Learn more about our generous program</a>
            </div>
          </div>
        </Container>
    </div>
  );
}

export default Member;