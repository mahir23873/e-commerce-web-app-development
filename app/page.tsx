'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowLeft, ArrowRight, Check, CreditCard, LockKeyhole, Minus, Plus, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react'

function ProductArtwork() {
  return (
    <div className="product-art" aria-label="Sculptural wireless headphones in bottle green" role="img">
      <div className="art-glow" />
      <div className="sound-wave wave-one" />
      <div className="sound-wave wave-two" />
      <div className="headphone-band" />
      <div className="headphone-cup cup-left"><div className="cup-inner" /><span>n°01</span></div>
      <div className="headphone-cup cup-right"><div className="cup-inner" /><span>STUDIO</span></div>
      <div className="art-caption"><span>FORM / FUNCTION</span><span>01 — 03</span></div>
    </div>
  )
}

export default function Page() {
  const [checkout, setCheckout] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [complete, setComplete] = useState(false)
  const subtotal = 289 * quantity

  return (
    <main className="store-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Forma home"><span className="brand-mark">F.</span> forma<span className="brand-period">®</span></a>
        <div className="topbar-center"><span className="status-dot" /> INDEPENDENT AUDIO, REIMAGINED</div>
        <button className="bag-button" onClick={() => setCheckout(true)} aria-label="Open checkout"><ShoppingBag size={17} strokeWidth={1.7} /><span>Bag</span><span className="bag-count">{quantity}</span></button>
      </header>

      <section className="main-grid" id="home">
        <div className="product-visual-wrap"><ProductArtwork /><div className="visual-index"><span>01</span><span className="index-line" /><span>DESIGNED TO DISAPPEAR</span></div></div>
        <div className="product-info">
          <div className="eyebrow"><span className="eyebrow-line" /> NEW RELEASE <span className="eyebrow-line" /></div>
          <div className="product-heading"><div className="product-title-wrap"><h1>Sound,<br /><em>redefined.</em></h1><span className="edition-mark">S–01<br />SERIES</span></div><p className="product-subtitle">Studio headphones for the way<br className="desktop-break" /> you actually listen.</p></div>
          <div className="product-meta"><div className="rating"><span className="stars">★★★★★</span><span>4.9</span><span className="rating-count">(128 reviews)</span></div><span className="availability"><span /> IN STOCK</span></div>
          <div className="price-line"><span className="price">$289</span><span className="price-note">Complimentary shipping</span></div>
          <div className="rule" />
          <div className="spec-row"><span className="spec-label">FINISH</span><div className="finish-info"><span className="finish-swatch" /><span>Evergreen</span></div><span className="spec-label">QTY</span><div className="quantity-control"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={13} /></button><span>{quantity}</span><button onClick={() => setQuantity(Math.min(9, quantity + 1))} aria-label="Increase quantity"><Plus size={13} /></button></div></div>
          <button className="buy-button" onClick={() => { setCheckout(true); setComplete(false) }}>Buy now <ArrowRight size={17} /></button>
          <div className="secure-note"><ShieldCheck size={14} strokeWidth={1.6} /><span>Secure checkout</span><span className="secure-separator">·</span><span>30-day returns</span></div>
          <div className="feature-row"><div><span className="feature-number">01</span><span>40h battery</span></div><div><span className="feature-number">02</span><span>Adaptive ANC</span></div><div><span className="feature-number">03</span><span>Spatial audio</span></div></div>
        </div>
      </section>

      <footer className="bottom-bar"><span>BUILT FOR THE IN-BETWEEN.</span><span className="bottom-center"><span className="bottom-dot" /> DESIGNED IN COPENHAGEN</span><span>SCROLL LESS. LISTEN MORE. <ArrowDownRight size={13} /></span></footer>

      {checkout && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setCheckout(false) }}><section className="checkout-panel" role="dialog" aria-modal="true" aria-labelledby="checkout-title"><div className="checkout-top"><button className="back-button" onClick={() => setCheckout(false)}><ArrowLeft size={16} /> Back to product</button><span className="secure-checkout"><LockKeyhole size={13} /> SECURE CHECKOUT</span></div>{complete ? <div className="success-state"><div className="success-icon"><Check size={25} /></div><span className="eyebrow">ORDER CONFIRMED</span><h2>You&apos;re all<br /><em>tuned in.</em></h2><p>Your Forma S–01 is getting ready. We&apos;ll send tracking details to your inbox.</p><button className="buy-button" onClick={() => setCheckout(false)}>Back to listening <ArrowRight size={17} /></button></div> : <><div className="checkout-heading"><span className="eyebrow"><span className="eyebrow-line" /> JUST ONE MORE THING</span><h2 id="checkout-title">Make it<br /><em>yours.</em></h2></div><div className="checkout-product"><div className="mini-product"><span className="mini-band" /><span className="mini-cup mini-left" /><span className="mini-cup mini-right" /></div><div className="checkout-product-copy"><strong>Forma S–01</strong><span>Evergreen · Qty {quantity}</span></div><strong>${subtotal}</strong></div><form className="payment-form" onSubmit={(event) => { event.preventDefault(); setComplete(true) }}><label htmlFor="email">EMAIL ADDRESS</label><input id="email" type="email" placeholder="you@example.com" required /><label htmlFor="card">CARD DETAILS</label><div className="card-input"><CreditCard size={16} /><input id="card" inputMode="numeric" placeholder="0000  0000  0000  0000" minLength={12} required /><span>VISA</span></div><div className="form-row"><div><label htmlFor="expiry">EXPIRY</label><input id="expiry" placeholder="MM / YY" required /></div><div><label htmlFor="cvc">CVC</label><input id="cvc" inputMode="numeric" placeholder="•••" minLength={3} required /></div></div><div className="checkout-total"><span>Total</span><strong>${subtotal}.00 <small>USD</small></strong></div><button className="buy-button" type="submit">Pay ${subtotal} <ArrowRight size={17} /></button><p className="payment-foot"><LockKeyhole size={12} /> Your payment information is encrypted and secure.</p></form></>}</section></div>}
    </main>
  )
}
