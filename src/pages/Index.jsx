import React, { useState } from "react";
import { Container, VStack, HStack, Input, Textarea, Button, Text, useClipboard, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";

const Index = () => {
  const [promptDetails, setPromptDetails] = useState({
    subject: "",
    style: "",
    colorScheme: "",
    lighting: "",
    camera: "",
    additionalDetails: "",
  });

  const { hasCopied, onCopy } = useClipboard(`${promptDetails.style}, ${promptDetails.colorScheme}, ${promptDetails.camera}, ${promptDetails.additionalDetails}, ${promptDetails.subject}, ${promptDetails.lighting}`);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPromptDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          MidJourney Prompt Creator
        </Text>

        <FormControl>
          <FormLabel>What</FormLabel>
          <Input name="subject" value={promptDetails.subject} onChange={handleChange} placeholder="Enter the type of image, art style, medium, etc." />
        </FormControl>

        <FormControl>
          <FormLabel>Who</FormLabel>
          <Input name="style" value={promptDetails.style} onChange={handleChange} placeholder="Enter the main subject or theme" />
        </FormControl>

        <FormControl>
          <FormLabel>Where</FormLabel>
          <Input name="colorScheme" value={promptDetails.colorScheme} onChange={handleChange} placeholder="Enter the scene or setting" />
        </FormControl>

        <FormControl>
          <FormLabel>When</FormLabel>
          <Input name="lighting" value={promptDetails.lighting} onChange={handleChange} placeholder="Enter the time or lighting" />
        </FormControl>

        <FormControl>
          <FormLabel>How</FormLabel>
          <Select name="camera" value={promptDetails.camera} onChange={handleChange} placeholder="Enter the style, rendering, extra details">
            <option value="Low Angle">Low Angle</option>
            <option value="High Angle">High Angle</option>
            <option value="Eye Level">Eye Level</option>
            <option value="Bird's Eye">Bird's Eye</option>
            <option value="Worm's Eye">Worm's Eye</option>
            <option value="Dutch Angle">Dutch Angle</option>
            <option value="Over the Shoulder">Over the Shoulder</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Additional Details</FormLabel>
          <Textarea name="additionalDetails" value={promptDetails.additionalDetails} onChange={handleChange} placeholder="Enter any additional details" />
        </FormControl>

        <HStack spacing={4}>
          <Button onClick={onCopy} leftIcon={<FaCopy />}>
            {hasCopied ? "Copied" : "Copy Prompt"}
          </Button>
        </HStack>

        <Text fontSize="lg" fontWeight="bold">
          Generated Prompt:
        </Text>
        <Text>{`${promptDetails.style}, ${promptDetails.colorScheme}, ${promptDetails.camera}, ${promptDetails.additionalDetails}, ${promptDetails.subject}, ${promptDetails.lighting}`}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
