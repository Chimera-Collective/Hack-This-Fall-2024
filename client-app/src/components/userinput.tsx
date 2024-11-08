import React, { useState, useRef } from 'react';
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SendHorizontal, Camera, Upload, Plus } from 'lucide-react'; 
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";

const UserInput = () => {
  const [recipeInput, setRecipeInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
    if (!fileInputRef.current) return;
    
    switch (key) {
      case "upload":
        fileInputRef.current.removeAttribute('capture');
        fileInputRef.current.click();
        break;
      case "new":
        fileInputRef.current.setAttribute('capture', 'environment');
        fileInputRef.current.click();
        break;
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      // Check file type?
      if (!file.type.startsWith('image/')) {
        console.error('Please upload an image file');
        return;
      }

      // Check file size
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        console.error('File is too large. Please upload an image smaller than 5MB');
        return;
      }

      // Create a preview URL if needed, is this necessary?
      const imageUrl = URL.createObjectURL(file);
      console.log('Image preview URL:', imageUrl);
      // TODO:
      // Send the image to your backend
      console.log('Processing image:', file.name);

      // Examplee
      const formData = new FormData();
      formData.append('image', file);

      // sample API call


    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
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
        <div className="w-1/4">
          <Dropdown>
            <DropdownTrigger className="w-full">
              <Button
                color="secondary"
                variant="shadow"
                size="lg"
                className="w-full"
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
        </div>

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

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default UserInput;