import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  VStack,
  Flex,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function ContactMe() {
  const { t } = useTranslation();

  // Color mode hooks
  const bg = useColorModeValue("gray.100", "gray.900");
  const inputBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");
  const borderColorDefault = useColorModeValue("gray.300", "gray.600");

  const toast = useToast();

  // Refs for inputs
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Validation state
  const [validation, setValidation] = useState({
    firstName: true,
    lastName: true,
    phone: true,
    email: true,
    message: true,
  });

  // Validate input fields dynamically
  const handleInputChange = (field: keyof typeof validation) => {
    let isValid = false;
    switch (field) {
      case "firstName":
        isValid = !!firstNameRef.current?.value.trim();
        break;
      case "lastName":
        isValid = !!lastNameRef.current?.value.trim();
        break;
      case "phone":
        isValid = !!phoneRef.current?.value.trim();
        break;
      case "email":
        isValid = !!emailRef.current?.value.trim();
        break;
      case "message":
        isValid = !!messageRef.current?.value.trim();
        break;
    }
    setValidation((prev) => ({ ...prev, [field]: isValid }));
  };

  const handleSubmit = () => {
    const isFirstNameValid = !!firstNameRef.current?.value.trim();
    const isLastNameValid = !!lastNameRef.current?.value.trim();
    const isPhoneValid = !!phoneRef.current?.value.trim();
    const isEmailValid = !!emailRef.current?.value.trim();
    const isMessageValid = !!messageRef.current?.value.trim();

    setValidation({
      firstName: isFirstNameValid,
      lastName: isLastNameValid,
      phone: isPhoneValid,
      email: isEmailValid,
      message: isMessageValid,
    });

    if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !isPhoneValid ||
      !isEmailValid ||
      !isMessageValid
    ) {
      toast({
        title: t("contactMe.warningTitle"),
        description: t("contactMe.warning"),
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: t("contactMe.messageSent"),
      description: t("contactMe.messageSuccess"),
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Clear inputs
    firstNameRef.current!.value = "";
    lastNameRef.current!.value = "";
    phoneRef.current!.value = "";
    emailRef.current!.value = "";
    messageRef.current!.value = "";
  };

  return (
    <Box bg={bg} color={textColor} py={10} minH="100vh">
      <VStack
        bg={useColorModeValue("white", "gray.800")}
        maxW="600px"
        mx="auto"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        spacing={6}
      >
        <Heading
          as="h2"
          size="lg"
          color={useColorModeValue("teal.500", "teal.300")}
        >
          {t("contactMe.getInTouch")}
        </Heading>

        <Flex w="100%" gap={4}>
          <Input
            ref={firstNameRef}
            placeholder={t("contactMe.firstName")}
            bg={inputBg}
            color={textColor}
            border="1px solid"
            borderColor={validation.firstName ? borderColorDefault : "red.500"}
            focusBorderColor={validation.firstName ? "teal.500" : "red.500"}
            onChange={() => handleInputChange("firstName")}
          />
          <Input
            ref={lastNameRef}
            placeholder={t("contactMe.lastName")}
            bg={inputBg}
            color={textColor}
            border="1px solid"
            borderColor={validation.lastName ? borderColorDefault : "red.500"}
            focusBorderColor={validation.lastName ? "teal.500" : "red.500"}
            onChange={() => handleInputChange("lastName")}
          />
        </Flex>

        <Input
          ref={phoneRef}
          placeholder={t("contactMe.phone")}
          type="tel"
          bg={inputBg}
          color={textColor}
          border="1px solid"
          borderColor={validation.phone ? borderColorDefault : "red.500"}
          focusBorderColor={validation.phone ? "teal.500" : "red.500"}
          onChange={() => handleInputChange("phone")}
        />
        <Input
          ref={emailRef}
          placeholder={t("contactMe.email")}
          type="email"
          bg={inputBg}
          color={textColor}
          border="1px solid"
          borderColor={validation.email ? borderColorDefault : "red.500"}
          focusBorderColor={validation.email ? "teal.500" : "red.500"}
          onChange={() => handleInputChange("email")}
        />
        <Textarea
          ref={messageRef}
          placeholder={t("contactMe.message")}
          bg={inputBg}
          color={textColor}
          border="1px solid"
          borderColor={validation.message ? borderColorDefault : "red.500"}
          focusBorderColor={validation.message ? "teal.500" : "red.500"}
          resize="none"
          onChange={() => handleInputChange("message")}
        />
        <Button
          colorScheme="teal"
          size="md"
          alignSelf="center"
          onClick={handleSubmit}
        >
          {t("contactMe.submit")}
        </Button>
      </VStack>
    </Box>
  );
}

export default ContactMe;
