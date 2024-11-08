
import React, { useState } from 'react';
import { Textarea } from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import { SendHorizontal } from 'lucide-react'; 

const UserInput = () => {
  const [recipeInput, setRecipeInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    setRecipeInput(value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement submission to backend
      const jsonData = {
        recipeText: recipeInput
      };
      console.log('Data to be sent:', jsonData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // test api call
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[800px] mx-auto p-4 flex flex-col gap-4">
      <Textarea
        // label="Text Input"
        placeholder="Enter your recipe and ingredients here..."
        description="Please enter your recipe details and list of ingredients to be processed for any dietary restrictions."
        value={recipeInput}
        onValueChange={handleInputChange}
        minRows={4}
        maxRows={20}
        size="lg"
        variant="bordered"
      />
      
      <Button
        color="primary"
        variant="shadow"
        size="lg"
        onClick={handleSubmit}
        isLoading={isLoading}
        endContent={!isLoading && <SendHorizontal size={20} />}
        fullWidth
      >
        Process Recipe
      </Button>
    </div>
  );
};

export default UserInput;