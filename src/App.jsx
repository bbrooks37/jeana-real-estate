import React, { useState } from 'react';
import { Bed, Bath, Square, MapPin, Mail, Phone, ChevronRight, Send, CheckCircle2, ShieldCheck, Key, ClipboardCheck, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('sales');
  const [inquiryData, setInquiryData] = useState({ name: '', email: '', message: '' });

  const jeanaContact = {
    name: "Jeana Taylor",
    license: "SL3639250 FL",
    officeAddr: "230 N Kentucky Ave 2nd Fl, Lakeland, FL 33801",
    directPhone: "(218) 760-9946",
    email: "jeana.taylor@cbrealty.com"
  };

  const listings = [
    {
      id: 1,
      price: "$224,900",
      address: "466 Lake Carolyn Cir, Lakeland, FL 33813",
      beds: 2, baths: 2, sqft: "1,318",
      tag: "Price Cut",
      img: "/LCC.jpg"
    },
    {
      id: 2,
      price: "$294,900",
      address: "4336 Winding Oaks Cir, Mulberry, FL 33860",
      beds: 3, baths: 2, sqft: "1,450",
      tag: "New Listing",
      img: "/WOC.jpg"
    },
    {
      id: 3,
      price: "$289,900",
      address: "4452 Hidden Pine Ct, Mulberry, FL",
      beds: 3, baths: 2, sqft: "1,636",
      tag: "Aerial Views",
      img: "/HPC.jpg"
    }
  ];

  const seasonalServices = [
    "Routine property check-ins while you’re away", "Mail and package collection coordination",
    "Lawn care and landscaping coordination", "Pool maintenance coordination",
    "Storm preparation and post-storm property checks", "Vendor and maintenance scheduling",
    "Emergency response coordination", "HVAC and utility monitoring",
    "Move-in ready preparation before your return", "Interior walkthroughs for property condition"
  ];

  const rentalServices = [
    "Tenant screening and placement", "Professional property marketing",
    "Lease preparation and execution", "Rent collection and owner disbursements",
    "Tenant communication and support", "24/7 maintenance coordination",
    "Routine property inspections", "Market rent analysis and pricing guidance",
    "Financial reporting", "Property condition monitoring"
  ];

  const handleInquiryChange = (e) => {
    const { name, value } = e.target;
    setInquiryData({ ...inquiryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Inquiry received from ${inquiryData.name}. (Form backend connection pending)`);
    setInquiryData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="text-xl font-bold text-blue-900 flex items-center gap-2">
          <span className="bg-blue-900 text-white px-2 py-1 rounded tracking-tighter">JT</span>
          <span className="hidden sm:inline tracking-tight">Jeana Taylor</span>
        </div>
        <ul className="hidden md:flex gap-8 font-bold text-sm text-gray-500 uppercase tracking-widest">
          <li><a href="#about" className="hover:text-blue-900 transition-colors">About</a></li>
          <li><a href="#listings" className="hover:text-blue-900 transition-colors">Listings</a></li>
          <li><a href="#services" className="hover:text-blue-900 transition-colors">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a></li>
        </ul>
        <img src="/JC.jpg" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" alt="Jeana Taylor" />
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        
        {/* About Section */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-6 md:p-10 rounded-[3rem] shadow-sm border border-gray-100">
          <div className="lg:col-span-5 relative">
            <img src="/JH.jpg" alt="Jeana Professional" className="rounded-4xl shadow-xl w-full object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-2xl hidden md:block border border-gray-50">
              <p className="text-3xl font-black text-blue-900">15+</p>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest leading-none">Years Team<br/>Experience</p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">Expert Real Estate & Property Management</h1>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Trusted realtor in Lakeland and Mulberry with extensive <strong>multi-family investment experience</strong>. Whether you're selling a luxury residence, managing rentals, or need seasonal "snowbird" home care, I provide a professional, hands-on approach to your real estate goals.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:bg-black transition-all">Request a Free Quote</a>
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section id="listings" className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Featured Listings</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-2">Explore my current properties in Lakeland & Mulberry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {listings.map((item) => (
              <div key={item.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img src={item.img} alt={item.address} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-900 shadow-sm">{item.tag}</div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">{item.price}</h3>
                  </div>
                  <p className="text-sm font-bold text-gray-500 flex items-center gap-1"><MapPin size={14} className="text-blue-900"/> {item.address}</p>
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-50">
                    <div className="text-center border-r border-gray-50"><p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Beds</p><p className="font-black text-gray-900">{item.beds}</p></div>
                    <div className="text-center border-r border-gray-50"><p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Baths</p><p className="font-black text-gray-900">{item.baths}</p></div>
                    <div className="text-center"><p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">SqFt</p><p className="font-black text-gray-900">{item.sqft}</p></div>
                  </div>
                  <button className="w-full py-3 bg-gray-50 group-hover:bg-blue-900 group-hover:text-white rounded-xl text-blue-900 font-black text-sm transition-colors flex items-center justify-center gap-2">
                    Request Information <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Hub Section */}
        <section id="services">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Service Offerings</h2>
            <div className="inline-flex bg-gray-200 p-1.5 rounded-2xl gap-2 shadow-inner">
              <button onClick={() => setActiveTab('sales')} className={`px-4 md:px-8 py-3 rounded-xl font-black text-xs md:text-sm transition-all ${activeTab === 'sales' ? 'bg-white shadow-md text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}>Residential Sales</button>
              <button onClick={() => setActiveTab('seasonal')} className={`px-4 md:px-8 py-3 rounded-xl font-black text-xs md:text-sm transition-all ${activeTab === 'seasonal' ? 'bg-white shadow-md text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}>Snowbird Services</button>
              <button onClick={() => setActiveTab('rentals')} className={`px-4 md:px-8 py-3 rounded-xl font-black text-xs md:text-sm transition-all ${activeTab === 'rentals' ? 'bg-white shadow-md text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}>Rental Management</button>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-sm border border-gray-100 min-h-112.5 flex items-center">
            {activeTab === 'sales' && (
              <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                <div className="space-y-6">
                  <h3 className="text-3xl font-black text-gray-900">Residential Sales & Marketing</h3>
                  <p className="text-gray-600 font-medium">High-end marketing strategies tailored for homeowners in the Central Florida market. We combine professional drone photography with global syndication to attract qualified buyers.</p>
                  <ul className="grid grid-cols-1 gap-3">
                    {["Competitive Market Analysis", "Professional Staging Guidance", "Global Luxury Syndication", "Drone & Aerial Marketing"].map(item => (
                      <li key={item} className="flex items-center gap-3 font-bold text-sm text-gray-700"><CheckCircle2 className="text-blue-900" size={20}/> {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-4xl overflow-hidden shadow-2xl h-80">
                  <img src="/WOC.jpg" className="w-full h-full object-cover" alt="Marketing Presentation" />
                </div>
              </div>
            )}

            {(activeTab === 'seasonal' || activeTab === 'rentals') && (
              <div className="w-full space-y-8">
                <div className="flex items-center gap-5 border-b border-gray-100 pb-8">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-900">
                    {activeTab === 'seasonal' ? <ShieldCheck size={40}/> : <Key size={40}/>}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">{activeTab === 'seasonal' ? "Snowbird Home Management" : "Full-Service Rental Management"}</h3>
                    <p className="text-blue-900/60 font-black uppercase text-xs tracking-[0.2em]">{activeTab === 'seasonal' ? "Peace of mind while you're away" : "Protecting your multi-family investments"}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(activeTab === 'seasonal' ? seasonalServices : rentalServices).map((service) => (
                    <div key={service} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all group">
                      <ClipboardCheck className="text-blue-600 mt-0.5 group-hover:scale-110 transition-transform" size={18} />
                      <span className="text-sm font-bold text-gray-700 leading-tight">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="bg-white border border-gray-100 p-8 md:p-16 rounded-[4rem] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
               <div className="space-y-2">
                 <h2 className="text-4xl font-black text-gray-900 tracking-tight">Interested in a property?</h2>
                 <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Lakeland's trusted multi-family and residential expert</p>
               </div>
               <div className="space-y-6 text-gray-600 font-bold">
                 <div className="flex items-center gap-4 group cursor-pointer"><div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-900 group-hover:text-white transition-colors"><Phone size={20} /></div> {jeanaContact.directPhone}</div>
                 <div className="flex items-center gap-4 group cursor-pointer"><div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-900 group-hover:text-white transition-colors"><Mail size={20} /></div> {jeanaContact.email}</div>
                 <div className="flex items-center gap-4 group cursor-pointer"><div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-900 group-hover:text-white transition-colors"><MapPin size={20} /></div> {jeanaContact.officeAddr}</div>
               </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Name</label>
                  <input name="name" value={inquiryData.name} onChange={handleInquiryChange} type="text" placeholder="Your Full Name" className="bg-white p-4 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue-900 w-full font-bold shadow-sm" required />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
                  <input name="email" value={inquiryData.email} onChange={handleInquiryChange} type="email" placeholder="Email Address" className="bg-white p-4 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue-900 w-full font-bold shadow-sm" required />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea name="message" value={inquiryData.message} onChange={handleInquiryChange} placeholder="Tell us about your property goals..." className="w-full bg-white p-4 rounded-xl border border-gray-200 text-sm h-32 outline-none focus:ring-2 focus:ring-blue-900 resize-none font-bold shadow-sm" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-black transition-all shadow-lg text-lg">Send Message <Send size={20} /></button>
            </form>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-100 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em]">
            <p>© {new Date().getFullYear()} Jeana Taylor • Coldwell Banker Realty</p>
            <p>Florida Realtor® License: {jeanaContact.license}</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
