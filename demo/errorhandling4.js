try {
    try {
      throw new Error('Error Occured');
    } catch (err) {
      console.log('Inner Catch - ', err.message);
      throw err;
    } finally {
      console.log('Finally Block');
    }
} catch (err) {
    console.error('Outer Catch - ', err.message);
} finally {
    console.log('last finally block')
}