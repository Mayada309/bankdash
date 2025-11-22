"use client";

import { useState } from 'react';

export function AddNewCard() {
  const [cardType, setCardType] = useState('Classic');
  const [nameOnCard, setNameOnCard] = useState('My Cards');
  const [cardNumber, setCardNumber] = useState('**** **** **** ****');
  const [expirationDate, setExpirationDate] = useState('25 January 2025');

  return (
    <div className="rounded-[25px] bg-white p-4">
      <p className="mb-6 text-[15px] leading-relaxed text-[#718EBF]">
        Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-base font-normal text-[#232323]">Card Type</label>
          <input
            type="text"
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            className="rounded-[15px] border border-[#DFEAF2] bg-white px-5 py-3 text-[15px] text-[#718EBF] outline-none focus:border-[#1814F3]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-normal text-[#232323]">Name On Card</label>
          <input
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            className="rounded-[15px] border border-[#DFEAF2] bg-white px-5 py-3 text-[15px] text-[#718EBF] outline-none focus:border-[#1814F3]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-normal text-[#232323]">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="rounded-[15px] border border-[#DFEAF2] bg-white px-5 py-3 text-[15px] text-[#718EBF] outline-none focus:border-[#1814F3]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-normal text-[#232323]">Expiration Date</label>
          <input
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            className="rounded-[15px] border border-[#DFEAF2] bg-white px-5 py-3 text-[15px] text-[#718EBF] outline-none focus:border-[#1814F3]"
          />
        </div>
      </div>

      <button className="mt-6 rounded-[15px] bg-[#1814F3] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#1814F3]/90">
        Add Card
      </button>
    </div>
  );
}
