import React, {useState} from 'react';

//shadcn uti'ties
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import {Textarea} from './ui/textarea.tsx';

import generateTechIpsum from '../utils/generateTechIpsum.ts';


export default function ByteIpsum () {

        const [ipsum, setIpsum] = useState('');
        const [paragraphs, setParagraphs] = useState(3);
        const [wordsPerParagraph, setWordsPerParagraph] = useState(50);
      
        const handleGenerate = () => {
          setIpsum(generateTechIpsum(paragraphs, wordsPerParagraph));
        };
      
        const handleCopy = () => {
          navigator.clipboard.writeText(ipsum);
        };
      
        return (
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>ByteIpsum</CardTitle>
              <p className="text-muted-foreground">Technical Lorem Ipsum Generator</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <label>Paragraphs:</label>
                    <input 
                      type="number" 
                      value={paragraphs} 
                      onChange={(e) => setParagraphs(Number(e.target.value))}
                      min="1" 
                      max="10" 
                      className="w-16 p-1 border rounded"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <label>Words per Paragraph:</label>
                    <input 
                      type="number" 
                      value={wordsPerParagraph} 
                      onChange={(e) => setWordsPerParagraph(Number(e.target.value))}
                      min="10" 
                      max="200" 
                      className="w-20 p-1 border rounded"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button onClick={handleGenerate}>Generate</Button>
                  <Button variant="secondary" onClick={handleCopy}>Copy</Button>
                </div>
                <Textarea 
                  value={ipsum} 
                  readOnly 
                  placeholder="Your technical lorem ipsum will appear here..."
                  className="min-h-[200px]"
                />
              </div>
            </CardContent>
          </Card>
        );
      
}