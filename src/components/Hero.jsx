import React from 'react'
import Spline from '@splinetool/react-spline'
import { MessageCircle, Send, Globe, Sparkles } from 'lucide-react'

function Badge({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 shadow-sm ring-1 ring-black/5">
      <Icon className="h-4 w-4 text-indigo-600" />
      <span className="text-xs font-medium text-slate-700">{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background gradient aura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25)_0%,rgba(56,189,248,0.2)_35%,rgba(249,115,22,0.15)_70%,transparent_80%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 sm:pt-28">
        {/* Top badges */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 ring-1 ring-black/5 backdrop-blur">
            <Sparkles className="h-4 w-4 text-violet-600" />
            <span className="text-xs font-medium text-slate-700">New • Personal Superintelligence</span>
          </div>
          <Badge icon={MessageCircle} label="WhatsApp" />
          <Badge icon={Send} label="Telegram" />
          <Badge icon={Globe} label="Web" />
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Meet MILO
          <span className="block bg-gradient-to-r from-indigo-600 via-sky-500 to-orange-500 bg-clip-text text-transparent">
            Your Personal Superintelligence
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          A proactive AI that lives where you do — in WhatsApp, Telegram, and on the web. 
          Plan, research, summarize, remember, and act across your life with a calm, futuristic touch.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow transition hover:shadow-lg hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" /> Start on WhatsApp
          </a>
          <a
            href="https://t.me/"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
          >
            <Send className="h-5 w-5" /> Start on Telegram
          </a>
          <a
            href="#try-web"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
          >
            <Globe className="h-5 w-5" /> Try on the Web
          </a>
        </div>

        {/* Spline 3D Scene */}
        <div className="relative mt-12 h-[420px] w-full max-w-5xl rounded-2xl border border-white/40 bg-white/30 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.15)] backdrop-blur-sm">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* soft gradient overlay edges to blend with background (doesn't block interaction) */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.08)_50%,transparent_75%)]" />
        </div>

        {/* Social proof / caption */}
        <p className="mt-6 text-center text-sm text-slate-500">
          A minimal, futuristic aura that visualizes MILO’s voice-first intelligence.
        </p>
      </div>
    </section>
  )
}
