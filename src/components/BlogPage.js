// import { React, useState, useEffect } from "react";

// import LogoComponent from "../subComponents/LogoComponent";
// import PowerButton from "../subComponents/PowerButton";
// import SocialIcons from "../subComponents/SocialIcons";
// import AnchorComponent from "../subComponents/Anchor";
// import BlogComponent from "../subComponents/BlogComponent";

// import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
// import { Blogs } from "../data/BlogData";

// import BigTitle from "../subComponents/BigTitle";

// const MainContainer = styled.div`
//   background-image: url(${img});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-attachment: fixed;
//   background-position: center;
// `;

// const Container = styled.div`
//   background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
//   width: 100%;
//   height: auto;

//   position: relative;
//   padding-bottom: 5rem;
// `;

// const Center = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 10rem;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
//   grid-gap: calc(1rem + 2vw);
// `;

// const BlogPage = () => {
//   const [numbers, setNumbers] = useState(0);

//   useEffect(() => {
//     let num = (window.innerHeight - 70) / 30;

//     setNumbers(parseInt(num));

//     return () => {};
//   }, [numbers]);

//   return (
//     <MainContainer>
//       <Container>
//         <LogoComponent />
//         <PowerButton />
//         <SocialIcons theme="light" />
//         <AnchorComponent numbers={numbers} />
//         <Center>
//           <Grid>
//             {Blogs.map((blog) => (
//               <BlogComponent key={blog.id} blog={blog} />
//             ))}
//           </Grid>
//         </Center>
//         <BigTitle text="SOURCES" top="5%" right="55%" />
//       </Container>
//     </MainContainer>
//   );
// };

// export default BlogPage;
