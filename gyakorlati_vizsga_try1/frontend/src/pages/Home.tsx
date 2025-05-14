import '../styles/home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import react, { useState } from 'react';
import image1 from '../imgs/lotto5.png';
import image2 from '../imgs/lotto6.png';
import image3 from '../imgs/lotto7.png';
import image4 from '../imgs/lotto8.png';
import { toast } from 'react-toastify';

const Home = () => {
    const [otos, setOtos] = useState<number>(0);
    const [hatos, setHatos] = useState<number>(0);
    const [skandinav, setSkandinav] = useState<number>(0);
    const [euro, setEuro] = useState<number>(0);
    
    const OtosBtn = () => {
        setOtos(1);
        localStorage.setItem('Ötös lottó', '1');
        toast.success('Fogadások közé téve!', { position: 'top-right', theme: 'colored' });
    };
    const HatosBtn = () => {
        setHatos(1);
        localStorage.setItem('Hatos lottó', '1');
        toast.success('Fogadások közé téve!', { position: 'top-right', theme: 'colored' });
    };
    const SkandinavBtn = () => {
        setSkandinav(1);
        localStorage.setItem('Skandináv lottó', '1');
        toast.success('Fogadások közé téve!', { position: 'top-right', theme: 'colored' });
    };
    const EurojackpotBtn = () => {
        setEuro(1);
        localStorage.setItem('Eurojackpot', '1');
        toast.success('Fogadások közé téve!', { position: 'top-right', theme: 'colored' });
    };
    return (
        <div>
            <h1>Lottók</h1>
            <div className="lottocards">
                <Card style={{ width: '25rem', height: '25rem' }}>
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                        <Card.Title>Ötös lottó</Card.Title>
                        <Card.Text>
                            Az Ötöslottó játékban 90 számból kell 5-öt kiválasztani
                        </Card.Text>
                        <Button variant="success" style={{ width: '20vw' }} onClick={OtosBtn}>
                            Játszom
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem', height: '25rem' }}>
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Title>Hatoslottó</Card.Title>
                        <Card.Text>
                            Az hatoslottó játékban 45 számból kell 6-ot kiválasztani
                        </Card.Text>
                        <Button variant="success" style={{ width: '20vw' }} onClick={HatosBtn}>
                            Játszom
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem', height: '25rem' }}>
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Title>Skandináv lottó</Card.Title>
                        <Card.Text>
                            Az Skandináv lottó játékban 35 számból kell 7-et kiválasztani
                        </Card.Text>
                        <Button variant="success" style={{ width: '20vw' }} onClick={SkandinavBtn}>
                            Játszom
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem', height: '25rem' }}>
                    <Card.Img variant="top" src={image4} />
                    <Card.Body>
                        <Card.Title>Eurojackpot</Card.Title>
                        <Card.Text>
                            Az Eurojackpot játékban 50 számból kell 5-öt és 12-ből 2-őt kiválasztani
                        </Card.Text>
                        <Button variant="success" style={{ width: '20vw' }} onClick={EurojackpotBtn}>
                            Játszom
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};
export default Home;
