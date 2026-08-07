import { CircleUserRound } from 'lucide-react';
import React from 'react'

export default function ArticleCard ({ articlesList })  {
  return (
    <div className="space-y-3 group cursor-pointer">
        <div className="aspect-4/3 rounded-lg overflow-hidden">
            <img 
                src={articlesList.image}
                alt={articlesList.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
        </div>
        <div className="space-y-2">
            <span className="font-sm text-[11px] uppercase tracking-widest text-live font-bold"> 
                {articlesList.tag}
            </span>
            <h4 className="font-heading text-2xl font-bold leading-tight group-hover:underline">
                {articlesList.title}
            </h4>
            <div className="flex items-center gap-3 pt-2">
                <img
                  className="w-6 h-6 rounded-full object-cover border"
                  src="/admin.png"
                />
                <div className="flex items-center gap-2 font-normal text-sm ">
                  <span>Admin</span>
                  <span>•</span>
                  <span>{articlesList.date}</span>
                </div>
            </div>
        </div>
    </div>
  );
}

