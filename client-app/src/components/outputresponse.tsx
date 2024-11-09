import React from 'react';
import { Card } from "@nextui-org/card";
import { CardBody } from "@nextui-org/card";
import { Spinner } from "@nextui-org/spinner";
interface OutputResponseProps {
  isLoading?: boolean;
  response?: {
    recipe?: {
      title?: string;
      ingredients?: string[];
      instructions?: string[];
    };
    error?: string;
  } | null;
}

const OutputResponse: React.FC<OutputResponseProps> = ({ 
  isLoading = false, 
  response = null 
}) => {
  return (
    <Card className="min-h-[300px] max-h-[600px]">
      <CardBody className="overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Spinner size="lg" label="Processing your ingredients..." />
          </div>
        ) : response ? (
          response.error ? (
            <div className="text-danger">{response.error}</div>
          ) : (
            <div className="flex flex-col gap-4">
              {response.recipe?.title && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">{response.recipe.title}</h3>
                </div>
              )}
              
              {response.recipe?.ingredients && (
                <div>
                  <h4 className="text-md font-semibold mb-2">Ingredients:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {response.recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-sm">{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {response.recipe?.instructions && (
                <div>
                  <h4 className="text-md font-semibold mb-2">Instructions:</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    {response.recipe.instructions.map((instruction, index) => (
                      <li key={index} className="text-sm">{instruction}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )
        ) : (
          <div className="flex items-center justify-center h-full text-default-500">
            Your ingredient analysis will generate here
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default OutputResponse;