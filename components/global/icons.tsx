import Image from 'next/image';

export function CreditCards() {
	return (
		<Image
			src={'/icons/credit-cards.svg'}
			alt='[ ]'
			width={36}
			height={36}
		/>
	)
}

export function ChipCard({dark}: {dark?: boolean}) {
	return (
		<Image
			src={dark ? '/icons/chip-card-dark.svg' : '/icons/chip-card.svg'}
			alt='[ ]'
			width={34.78}
			height={34.78}
		/>
	)
}
