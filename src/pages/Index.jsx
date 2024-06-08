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

  const { hasCopied, onCopy } = useClipboard(`Subject: ${promptDetails.subject}, Style: ${promptDetails.style}, Color Scheme: ${promptDetails.colorScheme}, Lighting: ${promptDetails.lighting}, Camera: ${promptDetails.camera}, Additional Details: ${promptDetails.additionalDetails}`);

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
          <FormLabel>Subject</FormLabel>
          <Input name="subject" value={promptDetails.subject} onChange={handleChange} placeholder="Enter the subject" />
        </FormControl>

        <FormControl>
          <FormLabel>Style</FormLabel>
          <Input name="style" value={promptDetails.style} onChange={handleChange} placeholder="Enter the style" />
        </FormControl>

        <FormControl>
          <FormLabel>Color Scheme</FormLabel>
          <Input name="colorScheme" value={promptDetails.colorScheme} onChange={handleChange} placeholder="Enter the color scheme" />
        </FormControl>

        <FormControl>
          <FormLabel>Lighting</FormLabel>
          <Input name="lighting" value={promptDetails.lighting} onChange={handleChange} placeholder="Enter the lighting" />
        </FormControl>

        <FormControl>
          <FormLabel>Camera</FormLabel>
          <Select name="camera" value={promptDetails.camera} onChange={handleChange} placeholder="Select camera angle">
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
        <Text>{`Subject: ${promptDetails.subject}, Style: ${promptDetails.style}, Color Scheme: ${promptDetails.colorScheme}, Lighting: ${promptDetails.lighting}, Camera: ${promptDetails.camera}, Additional Details: ${promptDetails.additionalDetails}`}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
