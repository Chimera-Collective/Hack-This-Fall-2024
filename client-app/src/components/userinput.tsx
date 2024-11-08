import React, { useState } from 'react';
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SendHorizontal, Camera, Upload, Plus } from 'lucide-react'; 
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";

const UserInput = () => {
  const [recipeInput, setRecipeInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    setRecipeInput(value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const jsonData = {
        recipeText: recipeInput
      };
      console.log('Data to be sent:', jsonData);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAction = (key: string) => {
    switch (key) {
      case "upload":
        console.log("Upload selected");
        //  upload logic
        break;
      case "new":
        console.log("New selected");
        //  new photo logic
        break;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Textarea
        placeholder="12 ounces of spaghetti, 4 large egg yolks, 1 cup of freshly grated Parmesan cheese..."
        description="Please enter a recipe link or provide a list of ingredients to be processed for any dietary restrictions."
        value={recipeInput}
        onValueChange={handleInputChange}
        minRows={4}
        maxRows={20}
        size="lg"
        variant="bordered"
      />
      
      <div className="flex gap-4">
        <Dropdown>
          <DropdownTrigger>
            <Button
              color="secondary"
              variant="shadow"
              size="lg"
              className="w-1/4"
              startContent={<Plus size={20} />}
            >
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Camera Actions" 
            onAction={(key) => handleAction(key as string)}
          >
            <DropdownItem
              key="upload"
              startContent={<Upload size={20} />}
            >
              Upload
            </DropdownItem>
            <DropdownItem
              key="new"
              startContent={<Camera size={20} />}
            >
              New
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Button
          color="primary"
          variant="shadow"
          size="lg"
          onClick={handleSubmit}
          isLoading={isLoading}
          endContent={!isLoading && <SendHorizontal size={20} />}
          className="w-3/4"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default UserInput;