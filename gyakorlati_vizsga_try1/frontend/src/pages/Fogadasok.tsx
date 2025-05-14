import '../styles/fogadasok.css';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

const Fogadasok = () => {
    const [bets, setBets] = useState({
        otos: localStorage.getItem('Ötös lottó') === '1',
        hatos: localStorage.getItem('Hatos lottó') === '1',
        skandinav: localStorage.getItem('Skandináv lottó') === '1',
        euro: localStorage.getItem('Eurojackpot') === '1',
    });

    useEffect(() => {
        const onStorage = () => {
            setBets({
                otos: localStorage.getItem('Ötös lottó') === '1',
                hatos: localStorage.getItem('Hatos lottó') === '1',
                skandinav: localStorage.getItem('Skandináv lottó') === '1',
                euro: localStorage.getItem('Eurojackpot') === '1',
            });
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    return (
        <div>
            <h1>Fogadások</h1>

            <table>
                <thead>
                    <tr>
                        <th>Játék</th>
                        <th>Megtéve-e?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ötös lottó</td>
                        <td>{bets.otos ? 'igen' : 'nem'}</td>
                    </tr>
                    <tr>
                        <td>Hatos lottó</td>
                        <td>{bets.hatos ? 'igen' : 'nem'}</td>
                    </tr>
                    <tr>
                        <td>Skandináv lottó</td>
                        <td>{bets.skandinav ? 'igen' : 'nem'}</td>
                    </tr>
                    <tr>
                        <td>Eurojackpot</td>
                        <td>{bets.euro ? 'igen' : 'nem'}</td>
                    </tr>
                </tbody>
            </table>

            <Button variant="success" style={{ width: '20vw' }} onClick={localStorage.clear}>
                Fogadások törlése
            </Button>
        </div>
    );
};

export default Fogadasok;
