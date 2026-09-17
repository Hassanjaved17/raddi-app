import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Comparison from './components/Comparison'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import RateTicker from './components/RateTicker'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-paper">
      <Toaster
        position="top-center"
        toastOptions={{ style: { background: '#16231C', color: '#EFEBDD', fontFamily: 'Manrope, sans-serif' } }}
      />
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Navbar />
        <Hero />
        <RateTicker />
        <Comparison />
        <HowItWorks />
        <Pricing />
        <BookingForm />
        <Footer />
      </motion.div>
    </div>
  )
}