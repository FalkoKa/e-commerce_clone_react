import TextField from '@mui/material/TextField';

export default function Address({ handleNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <div className="delivery-address">
      <h3 style={{ margin: '20px 0' }}>DELIVERY ADRESS</h3>

      <form onSubmit={handleSubmit} className="login-form">
        <TextField
          autoComplete="off"
          required
          id="outlined-required"
          label="Address line 1"
          size="small"
          fullWidth
        />
        <TextField
          autoComplete="off"
          required
          id="outlined-required"
          label="Postal Code"
          size="small"
          fullWidth
        />
        <TextField
          autoComplete="off"
          required
          id="outlined-required"
          label="Town / City"
          size="small"
          fullWidth
        />
        <TextField
          autoComplete="off"
          required
          label="Country"
          size="small"
          fullWidth
        />
        <button>NEXT</button>
      </form>
    </div>
  );
}
