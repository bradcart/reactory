// import { useNode, Element } from "@craftjs/core";
// import { SimpleGrid as ChakraGrid, Box } from "@chakra-ui/react";
// import { useEffect } from "react";

// import { Container } from "./Container";

// export const Grid = ({ columns }) => {
//   const {
//     connectors: { connect, drag },
//   } = useNode();

//   useEffect(() => {
//     console.log(columns);
//   }, []);

//   return (
//     <ChakraGrid ref={(ref) => connect(drag(ref))} columns={columns}>
//       {[...Array(columns)].map((column, index) => (
//         <Element
//           is={Container}
//           id={"column-" + index}
//           key={index}
//           bg="red"
//           w="200px"
//         >
//           <h1>hi</h1>
//         </Element>
//       ))}
//     </ChakraGrid>
//   );
// };
