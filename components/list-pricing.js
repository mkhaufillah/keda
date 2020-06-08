import Styles from '../styles/list-pricing.module.scss'
import Card from './card'

export default function ListPricing(props) {

    const { tiers } = props;

    return (
        <section className={Styles.listPricing} id="pricing">
            <h1>Pricing</h1>
            <div>
                {
                    tiers.map((tier, i) => (
                        <div key={i}>
                            <Card name={tier.name} action={tier.action} price={tier.price} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}