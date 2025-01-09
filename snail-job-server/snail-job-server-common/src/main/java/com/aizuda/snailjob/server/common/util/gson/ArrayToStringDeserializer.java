//package com.aizuda.snailjob.server.common.util.gson;
//
//import com.fasterxml.jackson.core.JacksonException;
//import com.fasterxml.jackson.core.JsonParser;
//import com.fasterxml.jackson.databind.DeserializationContext;
//import com.fasterxml.jackson.databind.JsonDeserializer;
//import com.fasterxml.jackson.databind.node.ArrayNode;
//
//import java.io.IOException;
//
//public class ArrayToStringDeserializer extends JsonDeserializer<String> {
//    @Override
//    public String deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JacksonException {
//        ArrayNode arrayNode = jsonParser.getCodec().readTree(jsonParser);
//        return arrayNode.toString();
//    }
//}
