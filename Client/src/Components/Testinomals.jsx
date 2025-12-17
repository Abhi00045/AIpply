// import React from "react";
// import mainImage from '../public/mainimage.png'

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Leigh Elodie",
//       title: "Marketing Manager",
//       image: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//       name: "Shannon Ember",
//       title: "Marketing Manager",
//       image: "https://randomuser.me/api/portraits/women/45.jpg",
//     },
//     {
//       name: "Betsy Sue",
//       title: "Marketing Manager",
//       image: "https://randomuser.me/api/portraits/women/46.jpg",
//     },
//     {
//       name: "Herbert Rocky",
//       title: "Marketing Manager",
//       image: "https://randomuser.me/api/portraits/men/47.jpg",
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       <div style={styles.headerSection}>
//         <h2 style={styles.title}>Testimonials</h2>
//         <p style={styles.subtitle}>
//           Sed placerat convallis aenean fermentum. Aliquet eget feugiat sed consectetur sodales eleifend.
//         </p>
//       </div>

//       <div style={styles.content}>
//         <div style={styles.left}>
//           <img
//             src={mainImage}
//             style={styles.mainImage}
//           />
//         </div>
//         <div style={styles.right}>
//           {testimonials.map((t, i) => (
//             <div key={i} style={styles.card}>
//               <div style={styles.stars}>⭐⭐⭐⭐⭐</div>
//               <p style={styles.text}>
//                 Sed placerat convallis aenean fermentum. Aliquet eget feugiat sed consectetur sodales eleifend.
//               </p>
//               <div style={styles.profile}>
//                 <img src={t.image} alt={t.name} style={styles.avatar} />
//                 <div>
//                   <strong>{t.name}</strong>
//                   <p style={styles.role}>{t.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Internal CSS styles
// const styles = {
//   container: {
//     padding: "60px 80px",
//     fontFamily: "sans-serif",
//     backgroundColor: "#fff",
//   },
//   headerSection: {
//     marginBottom: 40,
//   },
//   title: {
//     fontSize: "32px",
//     fontWeight: "700",
//     marginBottom: "10px",
//   },
//   subtitle: {
//     color: "#666",
//     fontSize: "16px",
//     maxWidth: "600px",
//   },
//   content: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "40px",
//     alignItems: "flex-start",
//   },
//   left: {
//     flex: "1 1 300px",
//   },
//   mainImage: {
//     width: "70%",
//     borderRadius: "10px",
//   },
//   right: {
//     flex: "2 1 500px",
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "20px",
//   },
//   card: {
//     backgroundColor: "#f9f9f9",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
//   },
//   stars: {
//     color: "#FFD700",
//     marginBottom: "10px",
//   },
//   text: {
//     fontSize: "14px",
//     color: "#555",
//     marginBottom: "15px",
//   },
//   profile: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   },
//   avatar: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     objectFit: "cover",
//   },
//   role: {
//     fontSize: "12px",
//     color: "#888",
//     margin: 0,
//   },
// };

// export default Testimonials;


import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-[#111111] py-16 px-6 md:py-24">
      {/* <div className="max-w-4xl mx-auto text-center border border-[#111111] rounded-3xl p-8 md:p-16 bg-[#111111] shadow-2xl"> */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Connect with us
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Schedule a quick call to learn how <span className="text-indigo-400 font-semibold">AIpply</span> can turn your hiring process into a powerful advantage.
        </p>

        <a 
          href="#contact" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] group"
        >
          Learn More 
          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>
      {/* </div> */}
    </section>
  );
};

export default Testimonials;

