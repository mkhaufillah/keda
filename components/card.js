import Styles from '../styles/card.module.scss'

export default function Card(props) {

    const { name, action, price } = props;

    return (
        <div className={Styles.card}>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <ul>
                    {
                        action.map((action, i) => (
                            <li key={i}>{action}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h1>{price}</h1>
            </div>
        </div>
    )
}