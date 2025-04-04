// src/components/Portfolio/sections/MainContent.tsx
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ExperienceTab } from './tabs/ExperienceTab';
import { ResearchTab } from './tabs/ResearchTab';
import { EducationTab } from './tabs/EducationTab';
import { ProjectsTab } from './tabs/ProjectsTab';
import { SkillsTab } from './tabs/SkillsTab';

const tabs = ['experience', 'research', 'education', 'projects', 'skills'];

export const MainContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-12">
      <Tabs defaultValue="experience" className="space-y-8">
        <TabsList className="bg-white/5 backdrop-blur-md p-2 rounded-2xl flex gap-2">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="flex-1 px-6 py-3 rounded-xl text-white/70 data-[state=active]:bg-white/10 data-[state=active]:text-white transition-all"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="experience">
          <ExperienceTab />
        </TabsContent>
        <TabsContent value="research">
          <ResearchTab />
        </TabsContent>
        <TabsContent value="education">
          <EducationTab />
        </TabsContent>
        <TabsContent value="projects">
          <ProjectsTab />
        </TabsContent>
        <TabsContent value="skills">
          <SkillsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};