import React from "react";
import { Layout, Text, Image } from "@ui-kitten/components";
import { styles } from "../assets/style";
import Swiper from "react-native-web-swiper";
import { BanerImage } from "../molecules/banerimage.slide.home";

export const Slide = () => {
  return (
    <Layout style={styles.slideBanner}>
      <Layout style={styles.slideContainer1}>
        <Swiper>
          <Layout style={[styles.slideContainer]} level="4">
            <BanerImage url="https://picsum.photos/324/200?technology" />
            <Text style={{ position: "absolute" }}>Slide 1</Text>
          </Layout>
          <Layout style={[styles.slideContainer]} level="4">
            <BanerImage url="https://picsum.photos/324/200?technology" />
            <Text style={{ position: "absolute" }}>Slide 2</Text>
          </Layout>
          <Layout style={[styles.slideContainer]} level="4">
            <BanerImage url="https://picsum.photos/324/200?technology" />
            <Text style={{ position: "absolute" }}>Slide 3</Text>
          </Layout>
          <Layout style={[styles.slideContainer]} level="4">
            <BanerImage url="https://picsum.photos/324/200?technology" />
            <Text style={{ position: "absolute" }}>Slide 4</Text>
          </Layout>
        </Swiper>
      </Layout>
    </Layout>
  );
};

// export const Slide = () => {
//     return (
//         <Layout style={styles.slideBanner}>
//           <Layout style={styles.slideContainer1}>
//             <Swiper>
//               <Layout style={[styles.slideContainer]} level="4">
//                 <Image
//                   style={styles.tinyLogo}
//                   source={{
//                     uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWhJ1KNxdMmqu6Z5OlTkmzmvc10SpayTPahRTt9xsCu7hl1BdAMHlxiJ24I9ZRme1swQ&usqp=CAU",
//                   }}
//                 />
//                 <Text>Slide 1</Text>
//               </Layout>
//               <Layout style={[styles.slideContainer]} level="4">
//                 <Text>Slide 2</Text>
//               </Layout>
//               <Layout style={[styles.slideContainer]} level="4">
//                 <Text>Slide 3</Text>
//               </Layout>
//               <Layout style={[styles.slideContainer]} level="4">
//                 <Text>Slide 4</Text>
//               </Layout>
//             </Swiper>
//           </Layout>
//         </Layout>
//       );
// };
