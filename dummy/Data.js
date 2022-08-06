let data = [
  {
    name: "folder1",
    isFolder: true,
    items: [
      { name: "file1", isFolder: false },
      {
        name: "folder2",
        isFolder: true,
        items: [
          {
            name: "file2",
            isFolder: false,
          },
        ],
      },
    ],
  },
];

export default data;
