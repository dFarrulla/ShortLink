import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export const Panagrama = () => {
  const [inputJson, setInputJson] = useState('');
  const [short_link, setShort_link] = useState('');

  const handleParseJson = () => {
    try {
      const jsonData = JSON.parse(inputJson);

      // Verifica se os campos existem no JSON antes de definir o estado
      if (jsonData.result.short_link) {
        setShort_link(jsonData.result.short_link);
      } else {
        alert('JSON não contém o campo "short link".');
      }
    } catch (error) {
      alert('Erro ao analisar o JSON.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Links:</Text>
      <TextInput
        placeholder="Insira o JSON aqui"
        onChangeText={setInputJson}
        value={inputJson}
        style={styles.input}
      />
      <Button title="Link" onPress={handleParseJson} />
      <TextInput
        value={short_link}
        style={styles.linkField}
        editable={true} // Impede a edição do campo de texto
        onTouchStart={() => {
          //lógica para copiar o link quando o campo de texto for tocado
          // Pode usar a API Clipboard para copiar o link para a área de transferência
          alert('Link copiado para a área de transferência: ' + short_link);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    padding: 8,
  },
  linkField: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    backgroundColor: '#f0f0f0',
  },
});
