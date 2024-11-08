import React, { useState, useRef } from 'react';
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SendHorizontal, Camera, Upload, Plus, X } from 'lucide-react'; 
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Camera as CameraPro } from 'react-camera-pro';

const UserInput = () => {
  const [recipeInput, setRecipeInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const camera = useRef<any>(null);
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
    switch (key) {
      case "upload":
        fileInputRef.current?.click();
        break;
      case "new":
        setShowCamera(true);
        break;
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      // Handle file upload logic here
      console.log('File uploaded:', file);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const takePhoto = () => {
    if (camera.current) {
      const photo = camera.current.takePhoto();
      console.log('Photo taken:', photo);
      // Here you would handle the photo data
      setShowCamera(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {showCamera ? (
        <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
  <CameraPro
    ref={camera}
    aspectRatio={9/16} // Changed to vertical 9:16 ratio
    facingMode="environment"
  />
  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
    <Button
      color="danger"
      variant="solid"
      size="lg"
      onClick={() => setShowCamera(false)}
      startContent={<X size={20} />}
    >
      Cancel
    </Button>
    <Button
      color="primary"
      variant="solid"
      size="lg"
      onClick={takePhoto}
      startContent={<Camera size={20} />}
    >
      Capture
    </Button>
  </div>
</div>
      ) : (
        <>
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
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <div className="w-full sm:w-1/4">
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
              className="w-full sm:w-3/4"
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
        </>
      )}
    </div>
  );
};

export default UserInput;