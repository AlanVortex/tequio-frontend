export const getUsers = (req, res) => {
    res.json([
      { id: 1, nombre: 'Carlos' },
      { id: 2, nombre: 'Ana' }
    ]);
  };
  