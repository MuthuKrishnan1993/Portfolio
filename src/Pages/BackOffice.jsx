import { Box, Card, Container, Flex, Text } from "@radix-ui/themes";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

import { db } from "../Firebase/connect"; // Adjust the path as needed

function Backoffice() {
  const [contactData, setContactData] = useState([]);
  const fetchContactData = async () => {
    const contactCollectionRef = collection(db, "contact");
    const data = await getDocs(contactCollectionRef);
    const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setContactData(newData);
    console.log(newData, contactData);
  };
  useEffect(() => {
    fetchContactData();
  }, []);
  return (
    <>
      <Container>
        <div className="flex flex-col gap-2.5 justify-center pt-40">
          <div className="w-fulljustify-center">
            <h1 className="justify-center font-bold text-tertiary-500 text-un lg:text-1.5xl mt-4 pl-2 flex flex-row gap-2 align-middle text-center align-center uppercase font-weight-900 font:oswald">
              Backoffice
            </h1>
            <h2 className="text-center font-bold text-secondary-500 lg:text-3xl mt-4 text-align-center pl-2">
              Manage your content here!
            </h2>
          </div>
          <div className="w-full flex flex-wrap">
            {contactData.length > 0 ? (
              contactData.map((data) => (
                <Box className="flex flex-row mb-2 w-2/4" key={data.id}>
                  <Card>
                    <Flex gap={10} direction="column">
                      <Box>
                        <Text as="div" size="2" weight="bold">
                          {data.name}
                        </Text>
                        <Text as="div" size="2" color="black">
                          {data.email}
                        </Text>
                        <Text as="div" size="2" color="black">
                          {data.message}
                        </Text>
                      </Box>
                    </Flex>
                  </Card>
                </Box>
              ))
            ) : (
              <div className="text-center text-secondary-500">
                No data available
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
export default Backoffice;
