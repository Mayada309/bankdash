import { MyCard } from '@/components/credit-cards/MyCard';
import { creditCards } from '@/data/creditcards';

function CreditCards() {
    return (
        <div className="p-8">
            <h1 className="mb-6 text-2xl font-semibold text-slate-900">My Cards</h1>
            <div className="flex flex-wrap gap-8">
                {creditCards.map((card) => (
                    <MyCard key={card.id} card={card} />
                ))}
            </div>
        </div>
    )
}

export default CreditCards
