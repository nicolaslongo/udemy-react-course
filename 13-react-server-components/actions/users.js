// Because of this directive, saveUserAction function will only be executed on server side
'use server';

import fs from 'node:fs';

export async function saveUserAction(formData) {
  console.log('saveUserAction executing!')
  const data = fs.readFileSync('dummy-db.json', 'utf-8');
  const instructors = JSON.parse(data);
  const newInstructor = {
    id: new Date().getTime().toString(),
    name: formData.get('name'),
    title: formData.get('title'),
  };

  instructors.push(newInstructor);
  fs.writeFileSync('dummy-db.json', JSON.stringify(instructors));
}
